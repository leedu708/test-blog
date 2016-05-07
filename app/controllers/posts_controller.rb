class PostsController < ApplicationController

  def index
    @posts = Post.all.limit(6).to_json
    respond_to do |format|
      format.json { render json: @posts, :status => 200 }
    end
  end

  def show
    @post = Post.find_by_id(params[:id]).to_json
    respond_to do |format|
      format.json { render json: @post, :status => 200 }
    end
  end

  def create
    post = Post.new(post_params)

    if post.save
      @post = post.to_json
      respond_to do |format|
        format.json { render json: @post, :status => 201 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 422 }
      end
    end
  end

  def update
    post = Post.find_by_id(params[:id])

    if post.update(post_params)
      respond_to do |format|
        format.json { render :nothing => :true, :status => 200 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 422 }
      end
    end
  end

  def destroy
    post = Post.find_by_id(params[:id])

    if post && post.destroy
      respond_to do |format|
        format.json { render :nothing => :true, :status => 204 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 422 }
      end
    end
  end

  private

  def post_params
    params.require(:post).permit(
      :title,
      :description,
      :content)
  end
  
end
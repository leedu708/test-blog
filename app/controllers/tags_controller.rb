class TagsController < ApplicationController

  def index
    @tags = Tag.all.to_json
    respond_to do |format|
      format.json { render :json => @tags, :status => 200 }
    end
  end

  def create
    tag = Tag.new(tag_params)

    if tag.save
      @tag = tag.to_json
      respond_to do |format|
        format.json { render :json => @tag, :status => 201 }
      end
    else
      respond_to do |format|
        format.json { render :nothing => :true, :status => 422 }
      end
    end
  end

  def destroy
    tag = Tag.find_by_id(params[:id])

    if tag && tag.destroy
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

  def tag_params
    params.require(:tag).permit(:name)
  end

end

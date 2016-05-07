class Post < ActiveRecord::Base
  has_many :taggings, :foreign_key => :post_id
  has_many :tags, :through => :taggings
end

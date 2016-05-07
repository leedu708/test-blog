Post.delete_all
Tagging.delete_all
Tag.delete_all

puts 'Old Entries Deleted'

MULTIPLIER = 5

(MULTIPLIER * 2).times do
  Post.create(:title => Faker::Book.title,
              :description => Faker::Lorem.paragraph(3),
              :content => Faker::Lorem.paragraphs(5))
end

puts 'Posts Created'

random_tags = ['Ruby', 'JavaScript', 'AngularJS', 'Rails', 'CSS', 'HTML', 'Heroku', 'Git', 'SQL', 'jQuery']

random_tags.each do |tag|
  Tag.create(:name => tag)
end

puts 'Tags Created'

Post.all.each do |post|
  Tag.all.each do |tag|
    if (rand(10) > 5)
      post.taggings.create(:tag_id => tag.id)
    end
  end
end

puts 'Added tags to posts'

puts 'Seeds Complete'
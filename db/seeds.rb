Post.delete_all

puts 'Old Entries Deleted'

MULTIPLIER = 5

(MULTIPLIER * 2).times do
  Post.create(:title => Faker::Book.title,
              :description => Faker::Lorem.paragraph(3),
              :content => Faker::Lorem.paragraphs(5))
end

puts 'Posts Created'

puts 'Seeds Complete'
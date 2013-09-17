require "stringex"

deploy_dir      = "_deploy" 
source_dir      = "_source"
css_dir         = "#{deploy_dir}/stylesheets"
sass_dir        = "#{source_dir}/_sass"
image_dir       = "#{source_dir}/images"

posts_dir       = "#{source_dir}/_posts"
drafts_dir      = "#{source_dir}/_drafts"
deploy_branch   = "master"
new_post_ext    = "markdown"


namespace :draft do

  desc "Begin a new draft in #{drafts_dir}"
  task :new, :title do |t, args|
    if args.title
      title = args.title
    else
      title = get_stdin("Enter a title for your post: ")
    end
    mkdir_p "#{drafts_dir}"
    filename = "#{drafts_dir}/#{title.to_url}.markdown"
    if File.exist?(filename)
      abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
    end
    puts "Creating new post: #{filename}"
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "layout: post"
      post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
      post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
      post.puts "comments: true"
      post.puts "published: true"
      post.puts "featured: false"
      post.puts "categories: "
      post.puts "tags: "
      post.puts "image:"
      post.puts "\tcover:"
      post.puts "level:"
      post.puts "hn: "
      post.puts "rd: "
      post.puts "---"
      post.puts "<!-- more -->"

    end
  end

  desc "Publish a new draft"
  task :publish, :filename do |t,args|
    src = "#{drafts_dir}/#{filename}"
    dst = "#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{filename}"

    cp_r "#{src}" "#{dst}"
    puts "Draft published as #{dst}"
  end
end

namespace :post do

  desc "Begin a new post in #{posts_dir}"
  task :new, :title do |t, args|
    if args.title
      title = args.title
    else
      title = get_stdin("Enter a title for your post: ")
    end
    mkdir_p "#{posts_dir}"
    filename = "#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{new_post_ext}"
    if File.exist?(filename)
      abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
    end
    puts "Creating new post: #{filename}"
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "layout: post"
      post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
      post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
      post.puts "comments: true"
      post.puts "published: true"
      post.puts "featured: false"
      post.puts "categories: "
      post.puts "tags: "
      post.puts "image:"
      post.puts "\tcover:"
      post.puts "level:"
      post.puts "hn: "
      post.puts "rd: "
      post.puts "---"
      post.puts "<!-- more -->"

    end
  end
end



desc "Generate jekyll site"
task :generate do
  puts "## Generating Site with Jekyll"
  system "jekyll build"
  system "compass compile --css-dir #{css_dir} --sass-dir #{sass_dir}"
end

desc "copy dot files for deployment"
task :copydot, :source, :dest do |t, args|
  FileList["#{args.source}/**/.*"].exclude("**/.", "**/..", "**/.DS_Store", "**/._*").each do |file|
    cp_r file, file.gsub(/#{args.source}/, "#{args.dest}") unless File.directory?(file)
  end
end


desc "deploy public directory to github pages"
multitask :push do
  puts "## Deploying branch to Github Pages "
  # (Dir["#{deploy_dir}/*"]).each { |f| rm_rf(f) }
  Rake::Task[:copydot].invoke(image_dir, deploy_dir)
  Rake::Task[:copydot].invoke("#{source_dir}/stylesheets", "#{deploy_dir}/stylesheets")
  Rake::Task[:copydot].invoke("#{source_dir}/javascripts", "#{deploy_dir}/javascripts")
  Rake::Task[:copydot].invoke("#{source_dir}/fonts", "#{deploy_dir}/fonts")
  # puts "\\n## copying #{asset_dir} to #{deploy_dir}"
  # cp_r "#{asset_dir}/.", deploy_dir
  cd "#{deploy_dir}" do
    system "git add ."
    system "git add -u"
    puts "\n## Commiting: Site updated at #{Time.now.utc}"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m \"#{message}\""
    puts "\n## Pushing generated #{deploy_dir} website"
    system "git push origin #{deploy_branch} --force"
    puts "\n## Github Pages deploy complete"
  end
end


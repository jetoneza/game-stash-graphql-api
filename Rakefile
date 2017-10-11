desc 'Deploy to server using capistrano and push a Git tag'
task :deploy do
  ssh_key_file = "#{ENV['HOME']}/.ssh/id_rsa"

  #puts "\n"
  #puts '-' * 80

  # Get commit to deploy
  revision = `git rev-parse master`.strip!
  unless $?.success?
    fail 'Could not get commit from "master" branch to deploy. Maybe you do not have "master" checked out?'
  end
  revision_message = `git --no-pager log -2 #{revision}`.strip!
  puts "Deploying commit on 'master' branch: \n\n#{revision_message}"
  puts "\n\n"

  # Deploy
  cmd = "cd capistrano; cap production deploy SSH_KEY=#{ssh_key_file}"
  fail 'Deployment with capistrano failed' unless system(cmd)

  puts "\n\n"
  puts '-' * 80

  # Git tag
  tagname = 'v' + Time.new.utc.strftime('%Y%m%d.%H%M%S')
  puts "Git-tagging with name: #{tagname}"
  fail 'Could not create a git tag' unless system("git tag -a #{tagname} -m 'Deployed to production.' #{revision}")
  fail 'Could not push git tag to origin' unless system("git push origin #{tagname}")
  puts "\nDone"
end

desc "Deploy to staging server"
task :deploy_staging do
  ssh_key_file = "#{ENV['HOME']}/.ssh/id_rsa"

  # Get commit to deploy
  revision = `git rev-parse staging`.strip!
  unless $?.success?
    fail 'Could not get commit from "staging" branch to deploy. Maybe you do not have "staging" checked out?'
  end
  revision_message = `git --no-pager log -2 #{revision}`.strip!
  puts "Deploying commit on 'staging' branch: \n\n#{revision_message}"
  puts "\n\n"

  # Deploy
  cmd = "cd capistrano; cap staging deploy SSH_KEY=#{ssh_key_file}"
  fail 'Deployment with capistrano failed' unless system(cmd)

  puts "\n\n"
  puts '-' * 80

  # Git tag
  tagname = 'staging.' + Time.new.utc.strftime('%Y%m%d.%H%M%S')
  puts "Git-tagging with name: #{tagname}"
  fail 'Could not create a git tag' unless system("git tag -a #{tagname} -m 'Deployed to staging.' #{revision}")
  fail 'Could not push git tag to origin' unless system("git push origin #{tagname}")
  puts "\nDone"
end

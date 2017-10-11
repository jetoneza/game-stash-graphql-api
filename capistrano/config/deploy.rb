# config valid only for Capistrano 3.5
# lock '3.5.0'

set :application, 'game-stash-graphql-api'
set :repo_url, 'git@github.com:jetoneza/game-stash-graphql-api.git'

set :scm, :git
set :git_strategy, SubmoduleStrategy
set :branch, "master"
set :deploy_to, "/var/apps/game_stash_graphql_api"

set :linked_files, %w{.env}
set :linked_files, %w{db/data.sqlite}

set :copy_exclude, [
  ".git",
  ".gitignore",
  "arcanist",
  "docs",
  "server-conf"
]
set :keep_releases, 5

set :ssh_options, {
  keys: [ENV['SSH_KEY']],
  keys_only: true,
  forward_agent: true
}

set :format, :pretty
set :log_level, :debug

namespace :deploy do
  task :run_server do
    on roles(:webserver) do
      execute "cd #{release_path}; yarn install"
      execute "cd #{release_path}; npm run db migrate:latest"
      execute "cd #{release_path}; pm2 delete #{fetch(:application)}"
      execute "cd #{release_path}; pm2 start npm --name=\"#{fetch(:application)}\" -- start --watch"
    end
  end

  # Flow doc: http://capistranorb.com/documentation/getting-started/flow/
  after :updated, :run_server
end

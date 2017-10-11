server 'rilate', user: 'root', roles: %w{webserver}

set :application, 'game-stash-graphql-api-staging'
set :deploy_to, '/var/apps/game_stash_graphql_api_staging'
set :branch, 'master'

# common
# run `bundle install`
# run `bundle exec jekyll serve`
# run `bundle update github-pages`

source "https://rubygems.org"

gem "jekyll", "~> 4.0.1"

#gem 'jekyll-theme-cloudcannon', :github => 'CloudCannon/jekyll-theme-cloudcannon', :branch => 'master'

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap", "~> 1.4.0"
  gem "jekyll-redirect-from", "~> 0.16.0"
  gem "jekyll-paginate", "~> 1.1.0"
  gem "jekyll-sass-converter", "~> 2.0"
#  gem 'jekyll-autoprefixer'
#  gem "jemoji", "~> 0.11.0"
#  gem "jekyll-toc", "~> 0.14.0"
#  gem "jekyll-seo-tag", "~> 2.5"
#  gem "jekyll-mermaid", "~> 1.0.0"
#  gem "jekyll-admin", "~> 0.11.0"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

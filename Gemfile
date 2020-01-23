# Gem Source
source 'https://rubygems.org'

# Jekyll
group :development, :test do
  gem 'jekyll', '~>4.0.0'
end

# Plugins
group :jekyll_plugins do
  gem 'jekyll-admin', '~>0.9.0'
  gem 'jekyll-feed', '~>0.13.0'
  gem 'jekyll-redirect-from', '~>0.15.0'
  gem 'jekyll-sass-converter', '~>2.0.1'
  gem 'jekyll-seo-tag', '~>2.6.1'
  gem 'jekyll-sitemap', '~>1.4.0'
  gem 'jekyll-toc', '~>0.12.2'
  gem 'jemoji', '~>0.11.1'
end

# Windows and JRuby
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem 'tzinfo', '~>1.2.6'
  gem 'tzinfo-data', '~>1.2019.3'
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

require 'bundler'
require 'rack/contrib/try_static'

Bundler.setup
Bundler.require

use Rack::Static,
  :urls => ["/img", "/js", "/css", "/fonts"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}

FROM ruby:alpine

# Install base packages
RUN apk update && apk upgrade
RUN apk add curl wget bash

# Copy sinatra app into docker and configure
RUN mkdir /root/barmate
WORKDIR /root/barmate
COPY . /root/barmate
RUN chmod +x /root/barmate/lib/test-script.rb

# Install ruby and ruby-bundler
RUN apk add ruby ruby-bundler ruby-irb libffi-dev vim
RUN bundle

# Clean APK cache
RUN rm -rf /var/cache/apk/*

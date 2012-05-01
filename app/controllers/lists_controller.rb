class ListsController < ApplicationController
  respond_to :html, :json

  def index
    render :json => { :list => "poop" }
  end

  def show
    render :json => { :list => "poop" }
  end

  def create
    render :json => { :list => "poop" }
  end

  def update
    render :json => { :list => "poop" }
  end

  def delete
    render :json => { :list => "poop" }
  end

end

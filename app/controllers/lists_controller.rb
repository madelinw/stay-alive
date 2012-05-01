class ListsController < ApplicationController
  respond_to :html, :json

  def index
    render :json => { :list => "poop" }
  end

  def show
    render :json => { :list => "poop" }
  end

end

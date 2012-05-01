class ChecklistsController < ApplicationController
  respond_to :html, :json

  before_filter :require_user
  skip_before_filter :only => [:index]
  
  def index
    #
  end

  def show
    render :json => { :list => "poop" }
  end

  def create
    checklist = Checklist.new({:title => params[:title], :description => params[:description], :user_id => @current_user})
    checklist.save
    render :json => checklist.to_json
  end

  def update
    render :json => { :list => "poop" }
  end

  def delete
    render :json => { :list => "poop" }
  end

end

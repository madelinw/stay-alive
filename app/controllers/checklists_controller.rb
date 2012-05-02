class ChecklistsController < ApplicationController
  respond_to :html, :json

  before_filter :require_user
  skip_before_filter :only => [:index]
  
  def index
    @checklists = Checklist.all

    respond_to do |format|
      format.html  # index.html.erb
      format.json  { render :json => @checklists }
    end
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
    Checklist.find(params[:id]).update_attributes!(post_params)
    # render :json => { :list => "poop" }
  end

  def delete
    render :json => { :list => "poop" }
  end

  private
    def post_params
      params.slice(:title, :description)
    end

end

class ItemsController < ApplicationController
  respond_to :html, :json

  before_filter :require_user
  skip_before_filter :only => [:index]

  def index

    respond_to do |format|
      format.html  # index.html.erb
      format.json  { render :json => items.all }
    end
  end

  def show
    render :json => { :list => "poop" }
  end

  def create
    item = items.create!(:title => params[:title], :description => params[:description])
    render :json => item.to_json
  end

  def update
    items.find(params[:id]).update_attributes!(post_params)
    render :json => { :list => "poop" }
  end

  def destroy
    item = items.find(params[:id])
    item.destroy
    render :json => {:message => "success"}
  end

  private
    def post_params
      params.slice(:title, :description)
    end

    def items
      checklist.items
    end

    def checklist
      current_user.checklists.create!(:title => 'Gobbly') if current_user.checklists.blank?
      current_user.checklists.first
    end
end
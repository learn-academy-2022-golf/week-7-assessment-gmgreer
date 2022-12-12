# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# The blog post controller is inheriting from application controller
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # instance variable that is saving all of the blog posts within the index method so that it can be used within the index html erb view, index is a get/read method that gets all entries 
    @posts = BlogPost.all
  end

  # ---3)
  # method show that will get a single item from a database by accessing the params for the primary key
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # method that is also a read or get that collects all the information in the right format to be sent to the backend in a create
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # creat is the first post method saving the create in an instance variable so we can test to se if it is valid. using the strong params so that we can ensure only what we want gets past then redirecting to a path that shows us that we were successful
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    #find the item that needs to be edited based on the id given. Probably when you hit the update button it takes the current id params that were passed when you selected the item you wanted to update
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # using the blog post params that ensure safe passing to the database update all of the information that is sent. Redirect if sucessful.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # redirects to show a successful destruction
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # private is only available within the controller. An extra level of security to keep information abstracted.
  private
  def blog_post_params
    # ---10)
    # setting it so that a user can't send a bunch of useless data through params. More security and also making it so you don't have to repeat yourself over and over again.
    params.require(:blog_post).permit(:title, :content)
  end
end

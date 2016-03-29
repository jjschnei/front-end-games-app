require 'test_helper'

class NameControllerTest < ActionController::TestCase
  test "should get Games" do
    get :Games
    assert_response :success
  end

end

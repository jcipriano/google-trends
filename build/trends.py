import gettext
import locale
import webapp2
import jinja2
import os
from webapp2_extras import routes

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

# MAIN DESKTOP HANDLER    
class MainPage(webapp2.RequestHandler):
  
    def get(self):
    
        template_values = {
            'message': "hello world",
        }

        template = jinja_environment.get_template('index.html')
        self.response.out.write(template.render(template_values))

# ROUTE SETUP            
app = webapp2.WSGIApplication([
    webapp2.Route('/', handler=MainPage, name='home'),
])
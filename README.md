# DPSproject1
## Chinese Fortune Cookie Service
### Background
Much to people’s surprise, the fortune cookie is not a Chinese invention, but an American ideaoriginating  in  California.   It  is  often  served  as  a  dessert  in  Chinese  restaurants  in  the  UnitedStates and other Western countries.
### Problem formulation
In this exercise you’ll get a chance to offer people an infinite amount of fortune cookies by justclicking  a  button.   You’ll  use  Kubernetes  to  create  a  backend  service  that’ll  return  a  fortunecookie  upon  request.   You  can  store  these  cookies  in  memory,  in  a  file  you  include  in  yourDockerfile or on the Internet.  If you need some cookies, look in Appendix A. The website can bea simple HTML page, some CSS styling and a bit of JavaScript that fetches a cookie from yourAPI whenever the user presses a button.

Formally, your solution should contain:
- A deployment specification that supports multiple pods and has resources enabled.
- A service that can forward HTTP calls to your pods.
- A website with some visualization of the cookie text and a way to get more.

Also, you must conduct the following experiments and support your findings with measurementsand your own arguments:
- Run a load test towards your Kubernetes service with a different number of active replicapods, for example 2, 5, and 10, and write down your results.  You can use PowerShell orNodeJS to make a simple loop that sends a lot of HTTP requests rapidly to your endpoint.Do you notice any lag?  Does response times improve when you add more pods?  Why orwhy not?
- With memory and CPU resources enabled for pods, experiment with various settings. Whathappens if you set the CPU resources very low?  What happens if a container exceeds itsmemory limit?  Document your findings.

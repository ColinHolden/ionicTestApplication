using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPIs.Controllers
{
  [RoutePrefix("About")]
  public class AboutController : ApiController
  {
    private const string AboutIonic = "This is a an application that makes use of the ionic framework, which is integrated with typescript and sass for a great user developer experience";

    [Route("Info")]
    public IHttpActionResult GetMainText()
    {
      return Ok(new
      {
        data = AboutIonic
      });
    }
  }
}

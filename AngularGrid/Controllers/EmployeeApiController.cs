using AngularGrid.DAL;
using AngularGrid.Model;
using AngularGrid.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;



namespace AngularGrid.Controllers
{
    public class EmployeeApiController : ApiController
    {

        IRepository<EmployeeDetail> obj = null;

        public EmployeeApiController()
        {
            obj = new EmployeeDAL();
        }


        public HttpResponseMessage GET()
        {
            var KeyValues = ControllerContext.Request.GetQueryNameValuePairs();

            string PageIndex = Convert.ToString(KeyValues.SingleOrDefault(x => x.Key == "PageIndex").Value);
            string PageSize = Convert.ToString(KeyValues.SingleOrDefault(x => x.Key == "PageSize").Value);
               
            HttpResponseMessage response = null;
            List<EmployeeDetail> employee = obj.List(Convert.ToInt32(PageSize), Convert.ToInt32(PageIndex)).ToList();

            response = Request.CreateResponse(HttpStatusCode.OK, employee);
            return response;

        }
    }
}

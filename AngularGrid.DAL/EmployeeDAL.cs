using AngularGrid.Model;
using AngularGrid.Repository;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using Dapper;
using System.Data;

namespace AngularGrid.DAL
{
    public class EmployeeDAL : IRepository<EmployeeDetail>
    {
        public List<EmployeeDetail> List(int PageSize, int PageIndex)
        {

            using (SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["AngularGridConnectionString"].ToString()))
            {
                var para = new DynamicParameters();
                para.Add("@PageSize", PageSize);
                para.Add("@PageIndex", PageIndex);
                return con.Query<EmployeeDetail>("usp_GetEmployeeDetail", para, null, true, 0, CommandType.StoredProcedure).ToList();

            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularGrid.Repository
{
    public interface IRepository<AnyType>
    {
        List<AnyType> List(int PageSize, int PageIndex);
    }
}

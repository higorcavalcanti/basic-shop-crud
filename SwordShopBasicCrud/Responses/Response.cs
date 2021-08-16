using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Responses
{
    public class Response<T>
    {
        public T Data { get; set; }
        public bool HasError { get; set; }
        public string ErrorMessage { get; set; }

        public ActionResult<Response<T>> Ok()
        {
            return new ObjectResult(this)
            {
                StatusCode = (int)HttpStatusCode.OK
            };
        }

        public ActionResult<Response<object>> Error()
        {
            return new ObjectResult(this)
            {
                StatusCode = (int)HttpStatusCode.BadRequest
            };
        }
    }
}

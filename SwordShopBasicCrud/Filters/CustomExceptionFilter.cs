using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SwordShopBasicCrud.Exceptions;
using SwordShopBasicCrud.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var exception = context.Exception;

            var response = new Response<object>();
            response.HasError = true;
            response.ErrorMessage = exception is CustomException ? exception.Message : "Erro desconhecido";

            context.Result = new BadRequestObjectResult(response)
            {
                StatusCode = (int)HttpStatusCode.BadRequest
            };
        }
    }
}

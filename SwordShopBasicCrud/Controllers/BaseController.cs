using Microsoft.AspNetCore.Mvc;
using SwordShopBasicCrud.Context;
using SwordShopBasicCrud.Models;
using SwordShopBasicCrud.Responses;
using SwordShopBasicCrud.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseController<TModel> : ControllerBase
        where TModel : BaseModel
    {
        protected BaseService<TModel> _service;
        public BaseController(BaseService<TModel> service)
        {
            _service = service;
        }

        [HttpGet]
        public virtual async Task<ActionResult<Response<IList<TModel>>>> Index()
        {
            var result = await _service.GetAllAsync();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public virtual async Task<ActionResult<Response<TModel>>> GetById([FromRoute] long id)
        {
            var result = await _service.GetByIdAsync(id);
            return Ok(result);
        }

        [HttpPost]
        public virtual async Task<ActionResult<Response<TModel>>> Add(TModel entity)
        {
            var result = await _service.AddAsync(entity);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public virtual async Task<ActionResult<Response<TModel>>> Edit([FromRoute] long id, TModel entity)
        {
            var result = await _service.PutAsync(id, entity);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public virtual async Task<ActionResult<Response<TModel>>> Delete([FromRoute] long id)
        {
            var result = await _service.DeleteAsync(id);
            return Ok(result);
        }

        protected ActionResult<Response<T>> Ok<T>(T data)
        {
            return new Response<T>
            {
                Data = data,
                HasError = false,
            }.Ok();
        }

        protected ActionResult<Response<object>> Error(string message)
        {
            return new Response<object>
            {
                HasError = true,
                ErrorMessage = message
            }.Ok();
        }
    }
}

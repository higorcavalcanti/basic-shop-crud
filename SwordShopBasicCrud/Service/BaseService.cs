using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SwordShopBasicCrud.Context;
using SwordShopBasicCrud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Service
{
    public class BaseService<TModel> where TModel : BaseModel
    {
        public readonly StoreContext _context;

        public BaseService(StoreContext context)
        {
            _context = context;
        }

        public async Task<IList<TModel>> GetAllAsync()
        {
            return await _context.Set<TModel>().ToListAsync();
        }

        public virtual async Task<TModel> AddAsync(TModel entity)
        {
            await _context.Set<TModel>().AddAsync(entity);

            await _context.SaveChangesAsync();

            return entity;
        }

        public virtual async Task<TModel> GetByIdAsync(long id)
        {
            var entityInDb = await _context.Set<TModel>().FindAsync(id);

            if (entityInDb == null)
                throw new Exception("Entidade não encontrada");

            return entityInDb;
        }

        public virtual async Task<TModel> PutAsync(long id, TModel entity)
        {
            var entityInDb = await GetByIdAsync(id);

            _context.Entry(entityInDb).CurrentValues.SetValues(entity);
            await _context.SaveChangesAsync();

            return entity;
        }

        public virtual async Task<TModel> DeleteAsync(long id)
        {
            var entityInDb = await GetByIdAsync(id);

            _context.Remove(entityInDb);
            await _context.SaveChangesAsync();

            return entityInDb;
        }
    }
}

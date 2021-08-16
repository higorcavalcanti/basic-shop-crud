using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SwordShopBasicCrud.Models
{
    public class Client : BaseModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Village { get; set; }
    }
}

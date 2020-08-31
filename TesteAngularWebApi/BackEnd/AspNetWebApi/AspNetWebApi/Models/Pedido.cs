using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.Compilation;

namespace AspNetWebApi.Models
{
    [Table("Pedido")]
    public class Pedido : BaseModelo
    {
        [Required]

        public long IdCliente { get; set; }

        public DateTime Data { get; set; }

        public double Valor { get; set; }

        public double Desconto { get; set; }

        public double ValorTotal { get; set; }

        }
    }
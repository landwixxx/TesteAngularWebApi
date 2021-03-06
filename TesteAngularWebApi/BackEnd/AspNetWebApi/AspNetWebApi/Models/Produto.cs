﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AspNetWebApi.Models
{
    [Table("Produto")]
    public class Produto : BaseModelo
    {
        [Required]
        public string Nome { get; set; }

        [Required]
        public string Descricao { get; set; }

        [Required]
        public double Valor { get; set; }

        [Required]
        public string Imagem { get; set; }
    }

}
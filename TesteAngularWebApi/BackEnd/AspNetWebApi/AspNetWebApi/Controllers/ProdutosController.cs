using AspNetWebApi.Context;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations.Model;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AspNetWebApi.Models;

namespace AspNetWebApi.Controllers
{
    public class ProdutosController : ApiController
    {
        public class Produto
        {
            public long Id { get; set; }
            public string Nome { get; set; }
            public string Descricao { get; set; }
            public double Valor { get; set; }                      
            public string Imagem { get; set; }
        }

        [HttpGet]
        public List<Produto> Get()
        {
            using (var contexto = new Contexto())
            {
                var produtosModelo = contexto.Produtos.ToList();
                var produtosProxy = new List<Produto>();

                foreach (var produtoModelo in produtosModelo)
                {
                    var produtoProxy = new Produto()
                    {
                       Id = produtoModelo.Id,
                       Nome = produtoModelo.Nome,
                       Descricao = produtoModelo.Descricao,
                       Valor = produtoModelo.Valor,
                       Imagem = produtoModelo.Imagem
                    };

                    produtosProxy.Add(produtoProxy);
                }

                return produtosProxy;
            }
        }

        public class NovoProduto
        {
               public string Nome { get; set; }
               public double Valor { get; set; }
               public string Descricao { get; set; }
               public string Imagem { get; set; }
           
        }

        [HttpPost]
        public void Post(NovoProduto novoProduto)
        {
            using (var contexto = new Contexto())
            {
                var produtoModelo = new Models.Produto()
                {
                    Nome = novoProduto.Nome,
                    Valor = novoProduto.Valor,
                    Descricao = novoProduto.Descricao,
                    Imagem = novoProduto.Imagem
                };

                contexto.Produtos.Add(produtoModelo);
                contexto.SaveChanges();

            }
        }                      
    }
}

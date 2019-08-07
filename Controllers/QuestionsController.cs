﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace interro.us.Controllers
{

    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Models.Question>> Get()
        {
            return new Models.Question[]{
                new Models.Question() {Text = "hello" },
                new Models.Question() {Text = "hi" }
            };

            /*{
                return context.Questions;
            };*/
        }

        [HttpPost]
        public void Post([FromBody]Models.Question question)
        {
            context.Questions.Add(question);
            context.SaveChanges();
        }

        
    }
}
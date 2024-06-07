using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BlogsController : ControllerBase
{
    private readonly BlogsService _blogsService;

    public BlogsController(BlogsService blogsService) =>
        _blogsService = blogsService;

    [HttpGet]
    public async Task<List<Blog>> Get() =>
        await _blogsService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Blog>> Get(string id)
    {
        var blog = await _blogsService.GetAsync(id);

        if (blog is null)
        {
            return NotFound();
        }

        return blog;
    }

    [HttpGet("author/{authorId}")]
    public async Task<ActionResult<List<Blog>>> GetByAuthorId(string authorId)
    {
        var blogs = await _blogsService.GetByAuthorIdAsync(authorId);

        if (blogs is null || blogs.Count == 0)
        {
            return NotFound();
        }

        return blogs;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Blog newBlog)
    {
        await _blogsService.CreateAsync(newBlog);

        return CreatedAtAction(nameof(Get), new { id = newBlog.Id }, newBlog);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Blog updatedBlog)
    {
        var blog = await _blogsService.GetAsync(id);

        if (blog is null)
        {
            return NotFound();
        }

        updatedBlog.Id = blog.Id;

        await _blogsService.UpdateAsync(id, updatedBlog);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var blog = await _blogsService.GetAsync(id);

        if (blog is null)
        {
            return NotFound();
        }

        await _blogsService.RemoveAsync(id);

        return NoContent();
    }
}

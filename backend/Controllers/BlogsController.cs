using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BlogsController : ControllerBase
{
    private readonly BlogsService _blogsService;

    public BlogsController(BlogsService BlogsService) =>
        _blogsService = BlogsService;

    [HttpGet]
    public async Task<List<Blog>> Get() =>
        await _blogsService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Blog>> Get(string id)
    {
        var Blog = await _blogsService.GetAsync(id);

        if (Blog is null)
        {
            return NotFound();
        }

        return Blog;
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
        var Blog = await _blogsService.GetAsync(id);

        if (Blog is null)
        {
            return NotFound();
        }

        updatedBlog.Id = Blog.Id;

        await _blogsService.UpdateAsync(id, updatedBlog);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var Blog = await _blogsService.GetAsync(id);

        if (Blog is null)
        {
            return NotFound();
        }

        await _blogsService.RemoveAsync(id);

        return NoContent();
    }
}
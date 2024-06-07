using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace backend.Models;
public class Blog
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("author_id")]
    public required string AuthorId { get; set; }

    [BsonElement("title")]
    public required string Title { get; set; }

    [BsonElement("content")]
    public required string Content { get; set; }

    [BsonElement("image_url")]
    public required string ImageUrl { get; set; }
}

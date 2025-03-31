using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;


namespace Image_Library.Controllers
{


    [Route("api/blob")]
    [ApiController]
    public class BlobController : ControllerBase
    {
        private readonly BlobServiceClient _blobServiceClient;
        private readonly string _containerName = "dawson"; // Change this to your container name

        public BlobController(BlobServiceClient blobServiceClient)
        {
            _blobServiceClient = blobServiceClient;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadBlob([FromForm] IFormFile file)
        {
            var blobContainer = _blobServiceClient.GetBlobContainerClient(_containerName);
            await blobContainer.CreateIfNotExistsAsync(PublicAccessType.Blob);

            var blobClient = blobContainer.GetBlobClient(file.FileName);
            var blobHttpHeaders = new BlobHttpHeaders { ContentType = file.ContentType };

            await using var stream = file.OpenReadStream();
            await blobClient.UploadAsync(stream, new BlobUploadOptions { HttpHeaders = blobHttpHeaders });

            return Ok(new { filename = file.FileName, url = "http://192.168.0.49:5000/api/blob/download/"+file.FileName });
        }


        [HttpGet("list")]
        public async Task<IActionResult> ListBlobs()
        {
            var blobContainer = _blobServiceClient.GetBlobContainerClient(_containerName);
            List<string> blobNames = new();

            await foreach (BlobItem blobItem in blobContainer.GetBlobsAsync())
            {
                blobNames.Add(blobItem.Name);
            }
            return Ok(blobNames);
        }

        [HttpGet("download/{blobName}")]
        public async Task<IActionResult> DownloadBlob(string blobName)
        {
            var blobContainer = _blobServiceClient.GetBlobContainerClient(_containerName);
            var blobClient = blobContainer.GetBlobClient(blobName);

            if (!await blobClient.ExistsAsync())
                return NotFound("Blob not found");

            var blobDownloadInfo = await blobClient.DownloadAsync();
            return File(blobDownloadInfo.Value.Content, blobDownloadInfo.Value.ContentType, blobName);
        }

        [HttpDelete("delete/{blobName}")]
        public async Task<IActionResult> DeleteBlob(string blobName)
        {
            var blobContainer = _blobServiceClient.GetBlobContainerClient(_containerName);
            var blobClient = blobContainer.GetBlobClient(blobName);

            await blobClient.DeleteIfExistsAsync();
            return Ok("Blob deleted successfully");
        }
    }

}

import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { NextResponse } from 'next/server';

const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  process.env.GOOGLE_REDIRECT_URI!
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
});

const drive = google.drive({ version: 'v3', auth: oauth2Client });

export async function POST(req: Request) {
  try {
    // Parse the JSON body from the request
    const body = await req.json();

    const fileMetadata = {
      name: 'employee_data.json',
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!], // Ensure folder ID is valid
    };

    const media = {
      mimeType: 'application/json',
      body: JSON.stringify(body), // Convert body to JSON string
    };

    // Create a file in Google Drive with the provided metadata and media
    const file = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id',
    });

    // Return a successful response with file ID
    return NextResponse.json({
      message: 'File saved to Google Drive',
      fileId: file.data.id,
    });
  } catch (error: unknown) {
    // Handle errors gracefully
    if (error instanceof Error) {
      console.error('Error saving to Google Drive:', error.message);
      return NextResponse.json(
        {
          message: 'Error saving to Google Drive',
          error: error.message,
        },
        { status: 500 }
      );
    }

    // If the error is not an instance of Error, log and respond with a generic error
    console.error('Unexpected error:', error);
    return NextResponse.json(
      {
        message: 'Unexpected error occurred',
      },
      { status: 500 }
    );
  }
}

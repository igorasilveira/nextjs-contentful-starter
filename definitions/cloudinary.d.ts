/* eslint-disable camelcase */
interface ICloudinaryImage {
  url: string;
  tags: string[];
  type: string;
  bytes: number;
  width: number;
  format: string;
  height: number;
  version: number;
  duration: number;
  metadata: string[];
  context: {
    custom: {
      alt: string,
      caption: string
    }
  };
  public_id: string;
  created_at: string;
  secure_url: string;
  resource_type: string;
  original_url: string;
  original_secure_url: string;
  raw_transformation: string;
}

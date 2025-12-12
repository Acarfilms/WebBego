export interface FileItem {
  name: string;
  path: string;
  url?: string;
}

export interface StorageHookResult {
  files: FileItem[];
  loading: boolean;
  error: string | null;
}
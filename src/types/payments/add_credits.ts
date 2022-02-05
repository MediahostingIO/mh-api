export interface AddCreditsResponse {
  success: boolean;
  paymentUrl?: string;
}

export interface AddCreditsDTO {
  paymentMethod: string;
  credits: number;
}

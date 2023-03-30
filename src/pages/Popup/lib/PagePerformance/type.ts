export enum PagePerformanceKeys {
  is_open = "is_open",
}

export interface PagePerformanceBaseProps {
  onFinish: (values?: Record<any, any>) => void;
  [PagePerformanceKeys.is_open]: boolean;
}

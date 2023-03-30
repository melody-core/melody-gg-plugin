import { useEffect, useRef } from "react";
import XForm from "../../../../components/XForm";
import configular from "./configular";


import type { FC } from "react";
import type { PagePerformanceBaseProps } from "./type";

import styles from "./index.module.css";
import { PerformanceChart } from "../comopnents/PerformanceChart";

interface InjectionResult {
    'first-paint': number;
    'first-contentful-paint': number;
  }

export const Base: FC<PagePerformanceBaseProps> = ({ is_open, onFinish }) => {
  const canvansContainerRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];
      if (tab.id !== undefined) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            func: () => {
                var performanceData = window.performance.getEntriesByType('paint');
                console.log("performanceData:", performanceData)
                var performanceMetrics = {
                    'first-paint': 0,
                    'first-contentful-paint': 0
                };
                for (var i=0; i<performanceData.length; i++) {
                    var entry = performanceData[i];
                    if (entry.name === 'first-paint') {
                        performanceMetrics['first-paint'] = entry.startTime;
                    } else if (entry.name === 'first-contentful-paint') {
                        performanceMetrics['first-contentful-paint'] = entry.startTime;
                    }
                }
                return performanceMetrics;
            }
        }, (results) => {
            var performanceMetrics = results[0]?.result as any as InjectionResult; 
            if(canvansContainerRef.current) {
                const chart = new PerformanceChart(canvansContainerRef.current, {
                    width: 300,
                    height: 200,
                    data: {
                        firstPaint: performanceMetrics["first-paint"],
                        firstContentfulPaint: performanceMetrics["first-contentful-paint"]
                    },
                    barWidth: 20,
                    labelColor: '#F11',
                    barColor: '#037',
                    barSpacing: 50,
                    axisColor: '#80F'
                });
                chart.draw()
            }
            
          }
        );
      }
    });
  }, []);
  return (
    <div className={styles["base_wrap"]}>
      <XForm
        config={{
          ...configular.config,
          props: {
            ...configular.config.props,
            name: `${
              configular.config.props.name || configular.belonging
            }_base`,
            initialValues: {
              is_open,
            },
            onFinish,
          },
        }}
      />

      <h3>当前页面渲染性能</h3>
      <div className={styles["content_wrap"]} >
        <canvas  width="400" height="300" ref={canvansContainerRef}></canvas>
      </div>
    </div>
  );
};

export default Base;

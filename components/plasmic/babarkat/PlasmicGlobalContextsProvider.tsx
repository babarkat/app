// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sZQMbqXz9utLNaTnNb3uss

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: NP7qNLfNGb4C/codeComponent
import { GrowthBook } from "@/fragment/growthbook"; // plasmic-import: 6gZuti1VknsC/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: uSFrkS0vtSdL/codeComponent
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";
import { ContentfulCredentialsProvider } from "@plasmicpkgs/plasmic-contentful";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;
  growthBookProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthBook>, "children">
  >;
  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
  contentfulCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof ContentfulCredentialsProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    antdConfigProviderProps,
    fragmentProps,
    growthBookProps,
    splunkProps,
    embedCssProps,
    contentfulCredentialsProviderProps
  } = props;

  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius!
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase!
          : "#ffffff"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError!
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo!
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary!
          : "#327CE4"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess!
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning!
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight!
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark!
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth!
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText!
          : undefined
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading!
          : undefined
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep!
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit!
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles!
          : true
          ? {
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#535353",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe!
          : false
      }
    >
      <Fragment
        {...fragmentProps}
        apiConfig={
          fragmentProps && "apiConfig" in fragmentProps
            ? fragmentProps.apiConfig!
            : undefined
        }
        previewApiConfig={
          fragmentProps && "previewApiConfig" in fragmentProps
            ? fragmentProps.previewApiConfig!
            : undefined
        }
        primaryColor={
          fragmentProps && "primaryColor" in fragmentProps
            ? fragmentProps.primaryColor!
            : "#000000"
        }
        rtl={
          fragmentProps && "rtl" in fragmentProps
            ? fragmentProps.rtl!
            : undefined
        }
      >
        <GrowthBook
          {...growthBookProps}
          apiHost={
            growthBookProps && "apiHost" in growthBookProps
              ? growthBookProps.apiHost!
              : undefined
          }
          clientKey={
            growthBookProps && "clientKey" in growthBookProps
              ? growthBookProps.clientKey!
              : undefined
          }
          previewAttributes={
            growthBookProps && "previewAttributes" in growthBookProps
              ? growthBookProps.previewAttributes!
              : undefined
          }
        >
          <Splunk
            {...splunkProps}
            defaultApiHost={
              splunkProps && "defaultApiHost" in splunkProps
                ? splunkProps.defaultApiHost!
                : undefined
            }
            defaultApiKey={
              splunkProps && "defaultApiKey" in splunkProps
                ? splunkProps.defaultApiKey!
                : undefined
            }
          >
            <EmbedCss
              {...embedCssProps}
              css={
                embedCssProps && "css" in embedCssProps
                  ? embedCssProps.css!
                  : "*{\r\n  direction: rtl;\r\n  font-family: 'yekan bakh';\r\n}\r\n.dateshow{\r\n    direction: ltr;\r\n}\r\n.rmdp-wrapper div{\r\n   width: 110%;\r\n   border: none !important;\r\n}\r\n.ant-radio-button-wrapper-checked{\r\n  color: #2DC57B !important;\r\n  font-weight: bold;\r\n}"
              }
            >
              <ContentfulCredentialsProvider
                {...contentfulCredentialsProviderProps}
                accessToken={
                  contentfulCredentialsProviderProps &&
                  "accessToken" in contentfulCredentialsProviderProps
                    ? contentfulCredentialsProviderProps.accessToken!
                    : "aWvf6oSLTuqxKCxSUpokajdQr84hGQFE6zoJG7DVVLg"
                }
                environment={
                  contentfulCredentialsProviderProps &&
                  "environment" in contentfulCredentialsProviderProps
                    ? contentfulCredentialsProviderProps.environment!
                    : "master"
                }
                space={
                  contentfulCredentialsProviderProps &&
                  "space" in contentfulCredentialsProviderProps
                    ? contentfulCredentialsProviderProps.space!
                    : "lmfbwqzbh93n"
                }
              >
                {children}
              </ContentfulCredentialsProvider>
            </EmbedCss>
          </Splunk>
        </GrowthBook>
      </Fragment>
    </AntdConfigProvider>
  );
}

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
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms";

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

  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
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
    contentfulCredentialsProviderProps,
    cmsCredentialsProviderProps
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
          : "..."
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading!
          : false
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
                  : "@font-face{\r\n  font-family: 'IranSans';\r\n  src: url('https://site-assets.plasmic.app/27fad752d4c101730c76d75d98cf2183.ttf');\r\n  font-weight: normal;\r\n}\r\n@font-face{\r\n  font-family: 'IranSans';\r\n  src: url('https://site-assets.plasmic.app/4b67ac4a1cf16c1e0bd59bb2099e5ae7.ttf');\r\n  font-weight: bold;\r\n}\r\n@font-face{\r\n  font-family: 'IranSans';\r\n  src: url('https://site-assets.plasmic.app/3c08154f4d5e905b9b9724aeab3fbf39.ttf');\r\n  font-weight: 600;\r\n}\r\n*{\r\n  direction: rtl;\r\n  font-family: 'IranSans' !important;\r\n}\r\nbody{\r\n  background-color: #1E2C39 !important;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n}\r\n.page{\r\n  width: 100vw !important;\r\n  height: 100% !important;;\r\n}\r\n.dateshow{\r\n    direction: ltr;\r\n}\r\n.rmdp-wrapper div{\r\n   width: 110%;\r\n   border: none !important;\r\n}\r\n.ant-radio-button-wrapper-checked{\r\n  color: #2DC57B !important;\r\n  font-weight: bold;\r\n}\r\n\r\n.ant-select-selector{\r\n  background-color: #161E26 !important;\r\n  border-radius: 4px !important;\r\n  border: none !important;\r\n  color: white !important;\r\n}\r\n.rc-virtual-list-holder-inner{\r\n  text-align: right !important;\r\n  border-end-end-radius: 4px !important;\r\n}\r\n\r\n.ant-progress-text{\r\n      display: none;\r\n}\r\ninput[type=\"number\"] {\r\n  direction: ltr !important;\r\n}\r\ninput[type=\"tel\"] {\r\n  direction: ltr !important;\r\n}"
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
                <CmsCredentialsProvider
                  {...cmsCredentialsProviderProps}
                  databaseId={
                    cmsCredentialsProviderProps &&
                    "databaseId" in cmsCredentialsProviderProps
                      ? cmsCredentialsProviderProps.databaseId!
                      : undefined
                  }
                  databaseToken={
                    cmsCredentialsProviderProps &&
                    "databaseToken" in cmsCredentialsProviderProps
                      ? cmsCredentialsProviderProps.databaseToken!
                      : undefined
                  }
                  host={
                    cmsCredentialsProviderProps &&
                    "host" in cmsCredentialsProviderProps
                      ? cmsCredentialsProviderProps.host!
                      : "https://data.plasmic.app"
                  }
                  locale={
                    cmsCredentialsProviderProps &&
                    "locale" in cmsCredentialsProviderProps
                      ? cmsCredentialsProviderProps.locale!
                      : undefined
                  }
                >
                  {children}
                </CmsCredentialsProvider>
              </ContentfulCredentialsProvider>
            </EmbedCss>
          </Splunk>
        </GrowthBook>
      </Fragment>
    </AntdConfigProvider>
  );
}

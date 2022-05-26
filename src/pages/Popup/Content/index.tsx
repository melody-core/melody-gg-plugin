/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-15 03:59:57
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-16 01:17:16
 * @FilePath: /sp-gg-plugin/src/pages/Popup/Content/index.tsx
 * @Description: update here
 */

import { Layout } from "antd";

import { useRoleList } from "./effect";
import Catalogue from "./Catalogue";
import RoleList from "./RoleList";
import { FC } from "react";
import { ContentProps } from "./type";

import styles from "./index.module.css";
import "antd/dist/antd.css";

const Content: FC<ContentProps> = ({ setCuRole, currentRole }) => {
  const { roleList = [] } = useRoleList();
  const content =
    currentRole?.role === -1 ? (
      <RoleList roleList={roleList} setCuRole={setCuRole} />
    ) : (
      <Catalogue setCuRole={setCuRole}/>
    );
  return (
    <Layout.Content
      className={styles["popup-content-wrap"]}
      style={{ padding: "20px 15px" }}
    >
      {content}
    </Layout.Content>
  );
};

export default Content;

import React, { useState } from "react";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import PropTypes from "prop-types";

const ScrollReuse = ({ refreshFunc, loading, children }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFunc();
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor="palegreen"
        />
      }
      style={{
        backgroundColor: "black",
      }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? (
        <ActivityIndicator color="palegreen" size="large" />
      ) : (
        children
      )}
    </ScrollView>
  );
};

ScrollReuse.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ScrollReuse;

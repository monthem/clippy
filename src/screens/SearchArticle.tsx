import { getScreenConstant } from '@api/constants'
import SearchBar from '@components/SearchBar'
import SearchResult from '@components/SearchResult'
import useReduxTheme from '@hooks/useReduxTheme'
import { PageContainer } from '@styled/PageContainer'
import { PageHeader } from '@styled/PageHeader'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const {SEARCHBAR_CONTAINER_VERTICAL_PADDING} = getScreenConstant("searchArticle");

const SearchArticleHeader = () => {
  const {state: ThemeState} = useReduxTheme();
  return (
    <PageHeader themeName={ThemeState.name}>Search Article</PageHeader>
  )
}

const SearchArticlePageContainer: React.FC<{}> = (props) => {
  const {state: ThemeState} = useReduxTheme();
  return (
    <PageContainer
      themeName={ThemeState.name}
      children={props.children}
    />
  )
}
export class SearchArticle extends Component {
  render() {
    return (
      <SearchArticlePageContainer>
        <SearchArticleHeader/>        
        <View style={styles.searchBarContainer}>
          <SearchBar/>
        </View>
        <View style={styles.searchResultContainer}>
          <SearchResult/>
        </View>
      </SearchArticlePageContainer>
    )
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    paddingVertical: SEARCHBAR_CONTAINER_VERTICAL_PADDING,
  },
  searchResultContainer: {
    flex: 1,
  }
})

export default SearchArticle
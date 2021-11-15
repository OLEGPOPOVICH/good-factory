import React, { Component } from 'react';
import styled from 'styled-components';
import { Utils } from '../utils';
import { getSectionName, getNames } from './helpers';
import { FileList } from './FileList';

export default class SidebarMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: {},
      loading: true
    }

    this.getName = this.getName.bind(this)
  }

  collapse() {
    setTimeout(function() {
      Utils.slideDown('[data-open=true]');
      Utils.slideUp('[data-open=false]');
    })
  }

  componentDidMount() {
    this.collapse()
    const names = getNames(this.props.sidebar);

    this.setState({
      names,
      loading: false
    });
  }

  getName(labels, folder, filename, indexFile) {
    if (labels && labels[indexFile]) {
      return labels[indexFile];
    }

    return this.state.names[`${folder}/${filename}`]
  }

  componentWillReceiveProps(nextProps) {
    let con2 = nextProps.currentSection !== this.props.currentSection
    if (con2) {
      this.collapse()
    }
  }

  render() {
    const { sidebar, currentSection, onSectionSelect, getLinkHref } = this.props
    const self = this;

    return !this.state.loading ? (
      <Menu id="sidebar-menu">
        <Sections>
          <SectionLinks>
            {sidebar.map((section, index) => {
              const isSectionActive = currentSection === index;
              const sectionName = getSectionName(section);

              return (
                <div key={index}>
                  <SectionLink
                    level={1}
                    href={getLinkHref(index)}
                    onClick={e => onSectionSelect(e, index)}
                    className={isSectionActive ? 'docSearch-lvl0' : ''}
                    isActive={isSectionActive}
                  >
                    {sectionName}
                  </SectionLink>

                  <FileList
                    files={section.files}
                    sectionFolder={section.folder}
                    isSectionActive={isSectionActive}
                    labels={section.labels}
                    getName={self.getName}
                  />
                </div>
              )
            })}
          </SectionLinks>
        </Sections>
      </Menu>
    ) : (
      <Menu id="sidebar-menu">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            margin: '44px 34px 0 0'
          }}
        >
        </div>
      </Menu>
    )
  }
}

const Menu = styled.div`
  position: sticky;
  top: 60px;
  width: 100%;
  height: calc(100vh - 138px);
  overflow-y: auto;
`
const Sections = styled.div`
  margin-bottom: 25px;
  margin-top: 10px;
  min-width: 280px;
`
const SectionLinks = styled.div`
  @media (max-width: 768px) {
    position: relative;
  }
`
const SectionLink = styled.a`
  display: block;
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: #b0b8c5;

  ${props => props.level === 1 && `
    margin-left: 5px;
  `}
  ${props => props.level === 2 && `
    margin-left: 30px;
  `};
  ${props => props.level === 3 && `
    margin-left: 45px;
  `};
  ${props => props.isActive && `
    color: #40364d;
	`};
`

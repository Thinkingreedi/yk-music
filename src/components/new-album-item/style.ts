import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
    .top {
        position: relative;
        width: 118px;
        height: 100px;
        overflow: hidden;
        > img {
            width: 100px;
            height: 100px;
        }
        > .cover {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        }
    }

    .bottom {
        font-size: 12px;
        width: 100px;
        .name {
            color: #000;
            ${(props) => props.theme.mixin.textNoWrap}
        }

        .artist {
            color: #666;
            ${(props) => props.theme.mixin.textNoWrap}
        }
    }
`

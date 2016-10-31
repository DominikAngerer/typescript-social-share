import { Controller } from '../lib/Controller';

/**
 * Social Share Controller which adds an click event
 * to all elements with the Data Attribute: data-social-share.
 * Can be configured directly in the DOM like:
 *
 * ```
 * <a href="http://example.org" data-social-share="http://example.org" data-social-share-type="facebook">Share on facebook</a>
 * ```
 *
 * This would share the URL example.org to facebook, or at least
 * would open the share dialog.
 *
 * @export
 * @class SocialShareController
 * @extends {Controller}
 */
export class SocialShareController extends Controller {

    /**
     * Selector for the Element which should trigger a click
     * 
     * @static
     * @type {string} selector
     */
    static selector: string = '[data-social-share]';
    
    /**
     * Content of the data-social-share data Attribute
     * 
     * @private
     * @type {string}
     */
    private toShare: string;

    /**
     * Content of the data-social-share-type data Attribute
     * so we know to which platform we should share it.
     * 
     * @private
     * @type {string}
     */    
    private shareType: string;
    
    /**
     * Content of the data-social-share-media data Attribute
     * at the moment only used for pintrest, cause they need an URL + image.
     * 
     * @private
     * @type {string}
     */
    private toShareMedia: string;

    /**
     * Creates an instance of SocialShareController.
     * 
     * @param {HTMLElement} element Element with the data-social-share attribute
     */
    constructor(element: HTMLElement) {
        super(element);
        this.$().addEventListener('click', (event: Event) => this.share(event) );   
    }

    /**
     * Creates the window for the share dialog according to the
     * Data-social-share-type and the URL which was passed using the
     * data-social-share attribute.
     * 
     * @param {Event} event Current click Event
     */
    share(event: Event) {
        event.preventDefault();
        this.toShare = this.$().getAttribute('data-social-share');
        this.shareType = this.$().getAttribute('data-social-share-type');
       
        if(!this.toShare) {
            this.toShare = window.location.href;
        }

        let url: string = window.location.href;

        switch (this.shareType) {
            case 'facebook':
                url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.toShare);   
                break;
            case 'pinterest':
                this.toShareMedia = this.$().getAttribute('data-social-share-media');
                url = 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(this.toShare);
                url = this.addQueryParameterToUrlString(url, 'media', this.toShareMedia);
                break;
            case 'twitter':
                url = 'https://twitter.com/home?status=Have%20a%20look%20at%3A%20' + encodeURIComponent(this.toShare);
                break;
            case 'google-plus':
                url = 'https://plus.google.com/share?url=' + encodeURIComponent(this.toShare);
                break;
            case 'linkedin':
                url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(this.toShare);
                break;
            case 'xing':
                url = 'https://www.xing.com/app/user?op=share;url=' + encodeURIComponent(this.toShare);
                break;
            case 'vk':
                url = 'https://vk.com/share.php?url=' + encodeURIComponent(this.toShare);
                break;
            default:
        }
        if(this.shareType) {
            window.open(url, '_blank', 'location=no,height=300,width=500,scrollbars=yes,status=yes');
        }    
    }
    
    /**
     * This appends an Parameter to an URL string or updates them.
     * 
     * @param {string} url URL string you want to modify
     * @param {string} param QueryParam Name
     * @param {string} value QueryParam Value
     * @returns {string} modified URL
     */
    addQueryParameterToUrlString(url: string, param: string, value: string): string {
        let link: HTMLAnchorElement = document.createElement('a')
        let regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/g;
        let match: any;
        let str: any = [];
        link.href = url;
        param = encodeURIComponent(param);
        while (match = regex.exec(link.search)) {
            if (param != match[1]) {
                str.push(match[1] + (match[2] ? '=' + match[2] : ''));
            }
        }
        str.push(param + (value ? '=' + encodeURIComponent(value) : ''));
        link.search = str.join('&');
        return link.href;
    }
    
}
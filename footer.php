<?php
/**
 * @package WordPress
 * @subpackage themename
 */
?>

	<footer id="colophon" role="contentinfo">
			<div id="site-generator">
				<small><span>Email <a href="mailto:cityshantyband@gmail.com" rel="bookmark">cityshantyband@gmail.com</a></span><span>Site by <a href="http://www.henryproudlove.com" rel="bookmark">Henry Proudlove</a></span></small>
			</div>
	</footer><!-- #colophon -->

<?php wp_footer(); ?>

</div><!-- #content -->

</div><!-- #page -->

<!-- Grab Google CDN's jQuery. Fall back to local if necessary -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script>!window.jQuery && document.write(unescape('%3Cscript src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.4.4.min.js"%3E%3C/script%3E'))</script>

<script src="<?php echo get_template_directory_uri(); ?>/js/scripts.js"></script>

<script type="text/javascript" src="http://webplayer.yahooapis.com/player-beta.js"></script>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-20412447-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</body>
</html>
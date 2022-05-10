<script lang="ts">
	import { toMorse, toText } from "$lib/functions/Convert";

	let convertedValue = "";
	let conversionType = "toText";
	let value = "";

	function convert() {
		if (value.includes(".") || value.includes("-") || value.includes("/")) {
			conversionType = "toText";
			console.log(conversionType);
		} else if (value.trim()) {
			conversionType = "toMorse";
		}

		if (conversionType === "toText") {
			convertedValue = toText(value);
		} else if (conversionType === "toMorse") {
			convertedValue = toMorse(value);
		}
	}
</script>

<select name="convert" id="convert" bind:value={conversionType}>
	<option value="toText">Convert to Text</option>
	<option value="toMorse">Convert to Morse Code</option>
</select>
<br />
<textarea name="" id="" cols="30" rows="10" bind:value on:keyup={convert} />
<h1>Convert</h1>
<pre>{convertedValue}</pre>
